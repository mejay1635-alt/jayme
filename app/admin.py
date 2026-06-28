from django.contrib import admin

from .models import Member, Photo, TreeHoleMessage


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('contact', 'gender', 'hobbies')
    search_fields = ('contact', 'gender', 'hobbies')


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_visible', 'created_at')
    list_filter = ('is_visible', 'created_at')
    search_fields = ('title', 'description')
    fields = ('title', 'description', 'image', 'is_visible')


@admin.register(TreeHoleMessage)
class TreeHoleMessageAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'content', 'is_visible', 'created_at')
    list_filter = ('is_visible', 'created_at')
    search_fields = ('nickname', 'content')
    fields = ('nickname', 'content', 'is_visible')
