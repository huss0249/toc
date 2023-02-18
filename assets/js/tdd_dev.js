globalThis.init_DEV = () => {
  // - Prepare Dev mode

  globalThis.developer = false;
  const devMode = Var_devMode.getValue();

  if (devMode === "1") {
    developer = true;

    //turn to alert in production
    console.log(
      "log",
      `${Object.keys({ developer })[0]}: ${developer}`,
      `${Object.keys({ devMode })[0]}: ${devMode}`
    );
    //console.log('alert', `${Object.keys({developer})[0]}: ${developer}`, `${Object.keys({devMode})[0]}: ${devMode}`)
  } else {
    developer = false;
    //        console.log('log', devMode, 'Disabled devMode')
  }
};