type project = "blog" | "recommendation" | "book" | "pdf";

export function getProjectIdCurrentEnvironment(typeProject: project) {
  let local;
  let online;

  switch (typeProject) {
    case "blog":
      local = "677976972d3f1a17c29bedd1";
      online = "67217730636d8cbcfa2f2e24";
      break;
    case "recommendation":
      local = "67797b1b438e3921bf4a28b9";
      online = "67217976636d8cbcfa2f2e37";
      break;
    case "book":
      local = "67797dde438e3921bf4a28e2";
      online = "672fc9d6eda40fc88018bf67";
      break;
    case "pdf":
      local = "67798da0438e3921bf4a2910";
      online = "6765e8a263a30b3829bdb6fa";
      break;
  }
  if (process.env.EXECUTION_ENVIRONMENT === "local") {
    return local;
  } else {
    return online;
  }
}
