from .models import Link
from django.shortcuts import get_object_or_404, redirect
from rest_framework import status, viewsets
from rest_framework.response import Response
from .serializers import LinkSerializer
from .utils import UrlShortner


class LinkViewSet(viewsets.ModelViewSet, UrlShortner):

    queryset = Link.objects.all()
    serializer_class = LinkSerializer

    def create(self, request):
        serializer = LinkSerializer(data=request.data)
        if serializer.is_valid():
            short_url = self.shorten_url()
            response_data = {}       
            try:
                Link.objects.create(
                    user_url = request.data['user_url'],
                    short_url = short_url
                ) 
                response_data['user_url'] = request.data['user_url']
                response_data['short_url'] = short_url   
            except IntegrityError:
                Link.objects.create(
                    user_url = request.data['user_url'],
                    short_url = self.shorten_url()
                ) 
            
            return Response(response_data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)



def retrieve_and_redirect(request, short_url):
    queryset = get_object_or_404(Link, short_url=short_url)
    return redirect(queryset.user_url)
