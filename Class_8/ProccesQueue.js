const requestsQueue = [
  {
    id: 1,
    type: "AI_PROMPT",
    status: "pending",
    priority: 1,
    payload: { model: "claude", tokens: 150, stream: true },
    user: { role: "student", active: true },
  },
  {
    id: 2,
    type: "DB_QUERY",
    status: "pending",
    priority: 3,
    payload: { query: "SELECT *", limit: 10 },
    user: { role: "admin", active: true },
  },
  {
    id: 3,
    type: "SEND_EMAIL",
    status: "corrupted",
    priority: 2,
    payload: null,
    user: { role: "guest", active: false },
  },
  {
    id: 4,
    type: "AI_PROMPT",
    status: "pending",
    priority: 5,
    payload: { model: "gpt-4", tokens: null, temp: undefined },
    user: { role: "admin", active: true },
  },
  {
    id: 5,
    type: "CRITICAL_HALT",
    status: "fatal",
    priority: 0,
    payload: { error: "Memory Overflow" },
    user: { role: "system", active: true },
  },
];

const actionLogs = [
  "init",
  "auth_check",
  "load_modules",
  "connect_db",
  "ready",
];

function debug(Msg, request) {
  console.log( Msg + request.id + " - " + request.type  )
}
function msg(Msg) {
  console.log( '      ' +Msg   )
}
function processQueue(queue, logs) {
  while (queue.length > 0) {
    const request = queue.shift();
    debug("Now work on ", request);
    
    if (request.type === "CRITICAL_HALT") {
      //console.log("FATAL ERROR");
      msg("FATAL ERROR");
      break;
    } else
    {msg("NOT FATAL ERROR");}
    let IspayloadNull = request.payload === null
    msg ('request status => ' + request.status + ' payload=> '  )
    msg (IspayloadNull)
    if (request.status === "corrupted" || request.payload === null) {

      continue;
    }


    const hasPermission = request.user.role === "admin" || request.priority > 2;

    const isUserActive = request.user.active === true;

    const isClaudeLowTokens =
      request.payload.model === "claude" && request.payload.tokens < 200;

    const isApproved = hasPermission && isUserActive && !isClaudeLowTokens;
    msg(
      "hasPermission,isUserActive,isClaudeLowTokens=>" + hasPermission +' ' +isUserActive +' '+isClaudeLowTokens );
      msg ('isApproved : '+isApproved)
    if (isApproved) {
      for (const key in request.payload) {
        if (
          request.payload[key] === null ||
          request.payload[key] === undefined
        ) {
          request.payload[key] = "MISSING_DATA";
        }
      }

      switch (request.type) {
        case "AI_PROMPT":
          msg("Routing to LLM Engine...");
          break;

        case "DB_QUERY":
          msg("Executing Secure Query...");
          break;

        case "SEND_EMAIL":
          msg("Adding to Mail Delivery Queue...");
          break;

        default:
          msg("Unknown request type");
      }
    }
  }

  for (let i = logs.length - 1; i >= logs.length - 3; i--) {
    console.log(logs[i]);
  }
}
processQueue(requestsQueue, actionLogs);
