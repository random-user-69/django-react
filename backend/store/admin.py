from django.contrib import admin
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


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "description"]
    search_fields = ["name"]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "unit_price",
        "inventory",
        "category",
        "created_at",
        "updated_at",
    ]
    list_filter = ["category", "created_at"]
    search_fields = ["name", "description"]


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ["user", "phone", "birth_date", "membership"]
    search_fields = ["user__username", "user__email", "phone"]


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ["order_date", "shipped_date", "status", "customer"]
    list_filter = ["status", "order_date"]
    search_fields = ["customer__user__username", "customer__user__email"]


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ["order", "product", "quantity", "unit_price"]
    search_fields = ["order__id", "product__name"]


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ["id", "created_at"]
    search_fields = ["id"]


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ["cart", "product", "quantity"]
    search_fields = ["cart__id", "product__name"]


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ["street", "city", "customer"]
    search_fields = ["street", "city", "customer__user__username"]


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ["product", "customer", "rating", "date"]
    list_filter = ["rating", "date"]
    search_fields = ["product__name", "customer__user__username"]
