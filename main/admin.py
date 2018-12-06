from .models import Song, Artist
from django.contrib import admin

# Register your models here


admin.site.register([Artist, Song])
