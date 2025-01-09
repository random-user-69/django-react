from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"categories", views.CategoryViewSet)
router.register(r"products", views.ProductViewSet)
router.register(r"customers", views.CustomerViewSet)
router.register(r"orders", views.OrderViewSet)
router.register(r"order-items", views.OrderItemViewSet)
router.register(r"carts", views.CartViewSet)
router.register(r"cart-items", views.CartItemViewSet)
router.register(r"addresses", views.AddressViewSet)
router.register(r"reviews", views.ReviewViewSet)

urlpatterns = []
urlpatterns += router.urls
