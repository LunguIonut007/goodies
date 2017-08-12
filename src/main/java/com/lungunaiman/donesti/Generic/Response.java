package com.lungunaiman.donesti.Generic;

import lombok.Data;

@Data
public class Response {

    private Object data;
    private String status;

    public Response(Object object) {
        this.data = object;
        this.status = "success";
    }

    public Response() { }

    public static Response getErrorResponse() {
        Response response = new Response();
        response.setStatus("error");

        return response;
    }
}
