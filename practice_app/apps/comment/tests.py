from django.test import TestCase
from django.utils import timezone

from .models import Comment
from apps.user.models import User
import datetime

class CommentModelTests(TestCase):

    def test_to_string(self):
        """comment.__str__() should return the text of the comment."""
        dummy_user = User(username="dummy", password="password")
        comment = Comment(text = "__str__ should return this string", author = dummy_user)

        self.assertEquals(str(comment),comment.text)

    def test_was_published_recently_with_future_comment(self):
        """Comments with future publish dates are not considered to be published recently."""
        dummy_user = User(username="dummy", password="password")
        future_comment = Comment(text = "This is a future comment.", author = dummy_user, pub_date = timezone.now() + datetime.timedelta(days=1))

        self.assertIs(future_comment.was_published_recently(), False)

    def test_was_published_recently_with_old_comment(self):
        """Comments that are published earlier than 3 minutes ago  are not considered to be published recently."""
        dummy_user = User(username="dummy", password="password")
        old_comment = Comment(text = "This is an old comment.", author = dummy_user, pub_date = timezone.now() - datetime.timedelta(minutes=3, seconds=1))

        self.assertIs(old_comment.was_published_recently(), False)

    def test_is_not_published_yet_with_future_comment(self):
        """Comments with future publish dates are not published yet."""
        dummy_user = User(username="dummy", password="password")
        future_comment = Comment(text = "This is a future comment.", author = dummy_user, pub_date = timezone.now() + datetime.timedelta(days=1))

        self.assertIs(future_comment.is_not_published_yet(), True)

    def test_is_not_published_yet_with_old_comment(self):
        """Comments with past publish dates are published."""
        dummy_user = User(username="dummy", password="password")
        old_comment = Comment(text = "This is an old comment.", author = dummy_user, pub_date = timezone.now() - datetime.timedelta(minutes=3, seconds=1))

        self.assertIs(old_comment.is_not_published_yet(), False)
