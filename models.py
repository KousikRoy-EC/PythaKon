from django.db import models


class Subscription(models.Model):
    User_Name = models.CharField(max_length=120)
    Post_Content = models.CharField(max_length=122)
