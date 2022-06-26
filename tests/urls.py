from rest_framework import routers
from .api import TestViewSet

router = routers.DefaultRouter()
router.register('', TestViewSet, 'test')

urlpatterns = router.urls