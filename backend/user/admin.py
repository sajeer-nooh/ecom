from django.contrib import admin
from django.contrib.auth.hashers import make_password, check_password
from user.models import *


class RoleAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_per_page = 25

    def has_delete_permission(self, request, obj=None):
        return False

    def has_change_permission(self, request, obj=None):
        return False


class UserAdmin(admin.ModelAdmin):
    list_display = ('email',)


    def save_model(self, request, obj, form, change):
        user_database = User.objects.get(pk=obj.pk)
        # Check firs the case in which the password is not encoded, then check in the case that the password is encode
        if not (check_password(form.data['password'], user_database.password) or user_database.password == form.data['password']):
            obj.password = make_password(obj.password)
        else:
            obj.password = user_database.password
        super().save_model(request, obj, form, change)

admin.site.register(Role, RoleAdmin)
admin.site.register(User, UserAdmin)