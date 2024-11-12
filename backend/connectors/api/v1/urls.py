from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GbcconenctorViewSet

router = DefaultRouter()
router.register("gbcconenctor", GbcconenctorViewSet, basename="gbcconenctor")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
