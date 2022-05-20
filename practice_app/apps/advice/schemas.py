from drf_yasg.inspectors import SwaggerAutoSchema

class AdviceSchema(SwaggerAutoSchema):
    def get_produces(self):
        return ["text/html"]
   