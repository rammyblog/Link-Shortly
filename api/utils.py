import string
from random import choices


class UrlShortner:
    def __init__(self):
        pass        
    def shorten_url(self):
        self.characters = string.ascii_lowercase + string.digits
        self.short_url = ''.join(choices(self.characters, k=5))
        return self.short_url
    


        
