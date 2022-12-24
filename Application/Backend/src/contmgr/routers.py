from .models import TextAnnotation, ImageAnnotation
from ..accmgr.models import RegisteredUser

class AnnotationDBRouter:

    def db_for_read(self, model, **hints):
        if model == TextAnnotation or model == ImageAnnotation:
            return 'annotation'
        return None

    def db_for_write(self, model, **hints):
        if model == TextAnnotation or model == ImageAnnotation:
            return 'annotation'
        return None

    def allow_relation(self, obj1, obj2, **hints):
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        return True