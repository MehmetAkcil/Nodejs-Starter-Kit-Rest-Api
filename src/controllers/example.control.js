import Response from "../utils/Response.js";


class Home {

    index = async (req, res) => {

        return Response.success(res, "Hello World")
    }

}

export default new Home()