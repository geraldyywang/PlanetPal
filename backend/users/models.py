from djongo import models
import bcrypt

# Create your models here.
class User(models.Model):
    """
    Each user will be associated with a username, password, points, and badges. These data will
    be stored in a MongoDB database
    """
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=250)
    points = models.IntegerField(default=0)
    badges = models.ListField(
        models.CharField(max_length=100),
        default=[]
    )


    def set_password(self, password):
        self.password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password.encode('utf-8'))