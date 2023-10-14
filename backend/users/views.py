from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User
from .serializers import UserSerializer
import bcrypt


# Create your views here.
class UserRegistrationView(APIView):
    """
    Registers the user into the database
    """
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Fields cannot be left empty
        if not username or not password:
            return Response({'error': 'Please fill up both fields'}, status=status.HTTP_400_BAD_REQUEST)

        # Hashing passwords before adding them into the database adds an extra layer of security
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        data = {'username': username,
                'password': hashed_password}
        
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered succesfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserLoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Check if user has signed up
        try:
            user = User.objects.get(username)
        except User.DoesNotExist:
            return Response({'error': 'User does not exist'}, status = status.HTTP_400_BAD_REQUEST)
        
        # If user has signed up, check if passwords match
        if user.check_password(password):
            return Response(UserSerializer(user).data, status = status.HTTP_200_OK)
        return Response({'error': 'Invalid passsword'}, status = status.HTTP_400_BAD_REQUEST)

