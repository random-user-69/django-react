from rest_framework import viewsets, filters
import rest_framework
from .models import (
    Category,
    Product,
    Customer,
    Order,
    OrderItem,
    Cart,
    CartItem,
    Address,
    Review,
)
from .serializers import (
    CategorySerializer,
    ProductSerializer,
    CustomerSerializer,
    OrderSerializer,
    OrderItemSerializer,
    CartSerializer,
    CartItemSerializer,
    AddressSerializer,
    ReviewSerializer,
)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "description"]

    def finalize_response(self, request, response, *args, **kwargs):
        response.data = response.data[:50]
        return super().finalize_response(request, response, *args, **kwargs)


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class CartItemViewSet(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
