from pyexpat import model
from rest_framework import serializers
from backend.models import Subscription


class SubscriptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscription
        fields = ['User_Name', 'Post_Content']
