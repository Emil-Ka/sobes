from django.db import models

class Test(models.Model):
  test_name = models.CharField(max_length=128)
  level = models.CharField(max_length=128)
  content = models.JSONField()
  time = models.IntegerField()

  def __str__(self):
    return self.test_name

