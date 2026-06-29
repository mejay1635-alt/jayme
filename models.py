from django.db import models


class Member(models.Model):
    contact = models.CharField('联系人', max_length=100, db_column='联系人')
    gender = models.CharField('性别', max_length=20, db_column='性别')
    hobbies = models.TextField('兴趣爱好', db_column='兴趣爱好')

    class Meta:
        db_table = 'members'
        verbose_name = '成员'
        verbose_name_plural = '成员'

    def __str__(self):
        return self.contact


class Photo(models.Model):
    title = models.CharField('标题', max_length=100)
    description = models.TextField('描述', blank=True)
    image = models.FileField('照片', upload_to='class_photos/')
    created_at = models.DateTimeField('上传时间', auto_now_add=True)
    is_visible = models.BooleanField('前台展示', default=True)

    class Meta:
        db_table = 'photos'
        verbose_name = '照片'
        verbose_name_plural = '照片'
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class TreeHoleMessage(models.Model):
    nickname = models.CharField('昵称', max_length=50, blank=True)
    content = models.TextField('留言内容')
    created_at = models.DateTimeField('提交时间', auto_now_add=True)
    is_visible = models.BooleanField('前台展示', default=True)

    class Meta:
        db_table = 'tree_hole_messages'
        verbose_name = '树洞留言'
        verbose_name_plural = '树洞留言'
        ordering = ['-created_at']

    def __str__(self):
        return self.content[:30]
