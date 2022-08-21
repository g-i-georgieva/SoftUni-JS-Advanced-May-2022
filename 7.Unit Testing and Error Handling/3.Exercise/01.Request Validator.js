function requestValidator(obj) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  let uriRegex = /^[\w.]+$/; // catches all alphanumerical signs and spaces
  let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  if (!(obj.method && validMethods.includes(obj.method))) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (!(obj.uri && (obj.uri == "*" || uriRegex.test(obj.uri)))) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!(obj.version && validVersion.includes(obj.version))) {
    throw new Error("Invalid request header: Invalid Version");
  }
  let messageRegex = /^[^<>\\&\'\"]+$/; //may contain any number of non-special characters (special characters are <, >, \, &, ', ")
  if (
    !(
      obj.hasOwnProperty("message") &&
      (obj.message === "" || messageRegex.test(obj.message))
    )
  ) {
    throw new Error("Invalid request header: Invalid Message");
  }

  return obj;
}
