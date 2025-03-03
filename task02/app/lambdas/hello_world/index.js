exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));

    // Extract path and method
    const { rawPath, requestContext } = event;
    const method = requestContext?.http?.method || "UNKNOWN";

    // Handle only GET /hello
    if (rawPath === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello from Lambda!" }),
        };
    }

    // Return 400 error for other endpoints
    return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            error: "Bad Request",
            message: `Invalid request: ${method} ${rawPath}`,
        }),
    };
};
