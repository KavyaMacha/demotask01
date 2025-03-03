exports.handler = async (event) => {
    const path = event.rawPath || event.path; // Adjust based on API Gateway format
    const method = event.requestContext?.http?.method || event.httpMethod; // Handle different AWS event formats

    if (path === "/hello" && method === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify("Hello from Lambda!"),
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Bad Request",
                message: `Invalid path: ${path} with method: ${method}`,
            }),
        };
    }
};
