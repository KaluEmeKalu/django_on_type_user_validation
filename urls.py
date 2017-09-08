
from django.conf.urls import url
from . import views


app_name = 'my_app'

urlpatterns = [
    url(r'^ajax/validate_username/$', views.validate_username, name='validate_username'),
]
