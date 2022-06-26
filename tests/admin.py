from django.contrib import admin
from .models import Test

class TestAdmin(admin.ModelAdmin):
  list_display = ('id', 'test_name', 'level', 'content', 'time')

admin.site.register(Test, TestAdmin)