from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """
    Converts the User model instances into JSON, simplifying the process
    of sending data through the API
    """
    class Meta:
        model = User
        # When we are passing the JSON object to the frontend, we do not want 
        # to expose the password
        exclude = ['password']