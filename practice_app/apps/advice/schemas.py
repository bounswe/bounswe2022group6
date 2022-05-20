from drf_yasg.inspectors import SwaggerAutoSchema

class MySchema(SwaggerAutoSchema):
    def get_produces(self):
        return ["text/html"]