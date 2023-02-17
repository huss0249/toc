function PageTrackingObj(exp, titleName, cm, frame){
   this.VarTrivPageTracking = new Variable( 'VarTrivPageTracking', null, 0, cm, frame, exp, titleName, true );
   this.numPages = 0;
   this.publishTimeStamp = 0;
   this.title = null;
}

PageTrackingObj.prototype.InitPageTracking = function ( )
{
	var THIS = this;
	var pageTrackData = this.VarTrivPageTracking.getValue();
	var bDoInit = true;
	try {
	    if (pageTrackData && pageTrackData.length > 0 && pageTrackData != '~~~null~~~')
	    {
	        var topLevelSplit = pageTrackData.split('#');
	        if (topLevelSplit && topLevelSplit.length > 1)
            {
		        var arrIds = topLevelSplit[0].split(',');
		        var arrStatus = topLevelSplit[1].split('');
		        var bits = 4;
		        for( var i=0; i<arrIds.length; i++ )
		        {
			        var id = parseInt( '0x' + arrIds[i] );
			        var mask = 1<<(i%bits);
			        var status = ( parseInt('0x'+arrStatus[Math.floor(i/bits)] ) & mask ) == 0 ? 1 : 2;
			        var node = this.FindNode( this.title, id );
			        if( node )
				        node.v = status;
		        }
    		}
        }
    } catch (e) { }
}

PageTrackingObj.prototype.FindNode = function( node, id )
{
	if( node.id == id )
		return node;
	
	var match = null;
	if( typeof( node.c ) != 'undefined' ){
		for( var i=0; i<node.c.length; i++ ){
			match = this.FindNode( node.c[i], id );
			if( match != null )
				break;
		}
	}
	
	return match;
}

PageTrackingObj.prototype.InternalGetRangeStatus = function( node )
{
	if( node == null )
		return -1;
		
	if( typeof(node.c) == 'undefined' )
	{
		return node.v;
	}
	else
	{
		// we need to calculate
		if( node.v == 0 )
		{
			var bAllComplete = true;
			var bInprogress = false;
			for( var i=0; i<node.c.length; i++ )
			{
				var cnode = node.c[i];
				var status = this.InternalGetRangeStatus( cnode );
				if( status == 1 || status == 2 )
					bInprogress = true;
				if( status == 0 || status == 1)
					bAllComplete = false;
			}
			
			if( !node.t && bAllComplete )
				return 2;
			else if( bInprogress )
				return 1;
			else
				return 0;
		}
		else
			return node.v
			
	}
}

//returns a incomplete or inprogress or complete
PageTrackingObj.prototype.GetRangeStatus = function( id, bInit )
{
	var status = -1;
	if ( bInit ) 
		this.InitPageTracking();
	
	status = this.InternalGetRangeStatus( this.FindNode( this.title, id ) );
		
	if( status == 0)
		return 'notstarted';	
	else if( status == 1 )
		return 'inprogress';
		
	return 'complete';
}


PageTrackingObj.prototype.InternalSetRangeStatus=function( node, status )
{
	if( node == null )
		return;
	node.v = status;
	if( status == 0 && typeof(node.c)!='undefined')
	{
		for( var i=0; i<node.c.length; i++ )
			this.InternalSetRangeStatus( node.c[i], status ); 
	}
}

PageTrackingObj.prototype.SetRangeStatus = function( id, status /*0 or 1 or 2*/)
{
	this.InternalSetRangeStatus( this.FindNode(this.title, id), status );
	
	this.SavePageTracking();
}

PageTrackingObj.prototype.IterateTree = function( func )
{
	var stack = [];
	stack.push( this.title );
	var i = 0;
	while( stack.length > 0 )
	{
		var node = stack.shift();
		
		if( typeof(node.c) != 'undefined' )
			stack = node.c.concat(stack);
			
		//do the thing
		func( node, i, stack );
		i++;
	}	
}

PageTrackingObj.prototype.SavePageTracking = function()
{
	var hexVal = 0;
	var hexString = '';
	
	var arrayIds = [];
	var arrayStatus= [];
	
	this.IterateTree( function(node, i, stack){
		if( node.v != 0 )
		{
			arrayIds.push(node.id);
			arrayStatus.push(node.v);
		}
	});
	
	for( var i=0; i<arrayIds.length; i++ )
	{
		if( i!=0 ) hexString += ',';
		hexString += arrayIds[i].toString(16);
	}
	
	hexString += '#';
	
	var bits = 4;
	var num = 0;
	for( var i=0; i<arrayStatus.length; i++ )
	{
		var bit = arrayStatus[i] == 2 ? 1 : 0
		num |= bit << (i%bits);
		if( ((i+1)%bits==0) || ((i+1)==arrayStatus.length) )
		{
			hexString += num.toString(16);
			num = 0;
		}
	}
	
	this.VarTrivPageTracking.set(hexString);
}

PageTrackingObj.prototype.GetNumCompPages = function(childArray, countCompleted)
{
	//Pass in title.c to get all completed pages
	for(var idx = 0; idx < childArray.length; idx++ )
	{
		if(childArray[idx].c)
			countCompleted = this.GetNumCompPages(childArray[idx].c, countCompleted);
		else if( typeof(childArray[idx].c) == 'undefined')
		{
			var strStatus ='';
			strStatus = this.GetRangeStatus(childArray[idx].id);
			if (strStatus === 'complete')
				countCompleted++;
		}
	}
	return countCompleted;
}

var trivPageTracking = new PageTrackingObj(365,'enhrms_frhrms', 0, null);
trivPageTracking.numPages = 70;

trivPageTracking.publishTimeStamp = 2023217134557;

trivPageTracking.title={id:1,v:0,c:[{id:880,v:0,c:[{id:129686,v:0},{id:45038,v:0,c:[{id:201818,v:0,c:[{id:193940,v:0},{id:193726,v:0},{id:193659,v:0},{id:193562,v:0},{id:193471,v:0},{id:193256,v:0},{id:193203,v:0},{id:193138,v:0},{id:193040,v:0},{id:205739,v:0}]},{id:205735,v:0,c:[{id:192903,v:0},{id:192701,v:0}]},{id:192683,v:0}]},{id:253,v:0,c:[{id:201820,v:0,c:[{id:197630,v:0},{id:197416,v:0},{id:197349,v:0},{id:197252,v:0},{id:197161,v:0},{id:196946,v:0},{id:196893,v:0},{id:196828,v:0},{id:196730,v:0},{id:206633,v:0}]},{id:205737,v:0,c:[{id:196593,v:0},{id:196391,v:0}]},{id:196299,v:0}]},{id:127207,v:0,c:[{id:127209,v:0,c:[{id:127210,v:0},{id:127228,v:0},{id:127219,v:0},{id:127262,v:0,c:[{id:127263,v:0},{id:127265,v:0}]},{id:127267,v:0,c:[{id:127268,v:0},{id:127270,v:0},{id:209114,v:0,c:[{id:209115,v:0},{id:209117,v:0},{id:209119,v:0,c:[{id:209120,v:0},{id:209122,v:0}]}]}]},{id:127272,v:0,c:[{id:127273,v:0},{id:127275,v:0}]}]},{id:127277,v:0,c:[{id:175907,v:0},{id:175880,v:0},{id:175878,v:0},{id:127296,v:0,c:[{id:127297,v:0},{id:127299,v:0}]},{id:127301,v:0,c:[{id:127302,v:0},{id:127304,v:0},{id:209124,v:0,c:[{id:209125,v:0},{id:209127,v:0},{id:209129,v:0,c:[{id:209130,v:0},{id:209132,v:0}]}]}]},{id:127306,v:0,c:[{id:127307,v:0},{id:127309,v:0}]}]},{id:127311,v:0,c:[{id:127312,v:0},{id:127322,v:0},{id:127332,v:0},{id:127342,v:0},{id:127352,v:0},{id:127362,v:0}]},{id:127372,v:0,c:[{id:127373,v:0},{id:127383,v:0},{id:127393,v:0},{id:127403,v:0},{id:127413,v:0},{id:127423,v:0}]},{id:205753,v:0,c:[{id:47243,v:0},{id:47025,v:0},{id:188424,v:0},{id:188413,v:0},{id:188392,v:0}]}]}]}]};
