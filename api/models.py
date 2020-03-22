from django.db import models
from django.utils import timezone

class Link(models.Model):
    user_url = models.URLField(max_length=5000)
    short_url = models.URLField(max_length=250, blank=True, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = ("Link")
        verbose_name_plural = ("Links")

    def __str__(self):
        return self.user_url