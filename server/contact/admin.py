from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'age', 'sex', 'city', 'state', 'pin', 'active')
    list_filter = ('sex', 'state', 'active')
    search_fields = ('name', 'email', 'city', 'state', 'pin')
    list_editable = ('active',)
    ordering = ('name',)

admin.site.register(Contact, ContactAdmin)

