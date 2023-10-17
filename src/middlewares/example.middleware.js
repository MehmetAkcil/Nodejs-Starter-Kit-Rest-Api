import Response from "../utils/Response.js";


const authToken = (req, res, next) => {

    if (false) {
        return Response.unauthorized(res, "Unauthorized")
    }

    next()

}


export default authToken