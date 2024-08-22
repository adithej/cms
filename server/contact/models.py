from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    age = models.CharField(max_length=50)
    sex = models.CharField(max_length=50)
    active = models.BooleanField()
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pin = models.CharField(max_length=50)

    def __str__(self):
        return self.name
