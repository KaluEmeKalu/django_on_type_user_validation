"""
Much of this code was taken from this blog post:
    https://simpleisbetterthancomplex.com/tutorial/2016/08/29/how-to-work-with-ajax-request-with-django.html
  
"""

from django.contrib.auth.models import User
from django.http import JsonResponse


def validate_username(request):
    username = request.GET.get('username', None)
    data = {
        'is_taken': User.objects.filter(username__iexact=username).exists()
    }
    message = 'A user with the username "{}" already exists.'.format(username)
    if data['is_taken']:
        data['error_message'] = message
    return JsonResponse(data)
