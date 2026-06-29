import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .models import Member, Photo, TreeHoleMessage


def frontend(request):
    return render(request, 'frontend/index.html')


def api_response(data, status=200):
    response = JsonResponse(
        data,
        status=status,
        json_dumps_params={'ensure_ascii': False},
    )
    response['Access-Control-Allow-Origin'] = '*'
    response['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


@csrf_exempt
@require_http_methods(['GET', 'POST', 'OPTIONS'])
def members_api(request):
    if request.method == 'OPTIONS':
        return api_response({'detail': 'ok'})

    if request.method == 'GET':
        members = [
            {
                'id': member.id,
                '联系人': member.contact,
                '性别': member.gender,
                '兴趣爱好': member.hobbies,
            }
            for member in Member.objects.order_by('-id')
        ]
        return api_response({'results': members})

    try:
        payload = json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError:
        return api_response({'error': '请求体必须是 JSON 格式'}, status=400)

    contact = payload.get('联系人') or payload.get('contact')
    gender = payload.get('性别') or payload.get('gender')
    hobbies = payload.get('兴趣爱好') or payload.get('hobbies')

    missing_fields = [
        label
        for label, value in (
            ('联系人', contact),
            ('性别', gender),
            ('兴趣爱好', hobbies),
        )
        if not value
    ]
    if missing_fields:
        return api_response(
            {'error': '缺少必填字段', 'fields': missing_fields},
            status=400,
        )

    member = Member.objects.create(
        contact=str(contact).strip(),
        gender=str(gender).strip(),
        hobbies=str(hobbies).strip(),
    )

    return api_response(
        {
            'id': member.id,
            '联系人': member.contact,
            '性别': member.gender,
            '兴趣爱好': member.hobbies,
        },
        status=201,
    )


@require_http_methods(['GET', 'OPTIONS'])
def photos_api(request):
    if request.method == 'OPTIONS':
        return api_response({'detail': 'ok'})

    photos = [
        {
            'id': photo.id,
            '标题': photo.title,
            '描述': photo.description,
            '图片地址': request.build_absolute_uri(photo.image.url),
            '上传时间': photo.created_at.isoformat(),
        }
        for photo in Photo.objects.filter(is_visible=True)
    ]
    return api_response({'results': photos})


@csrf_exempt
@require_http_methods(['GET', 'POST', 'OPTIONS'])
def tree_hole_api(request):
    if request.method == 'OPTIONS':
        return api_response({'detail': 'ok'})

    if request.method == 'GET':
        messages = [
            {
                'id': message.id,
                '昵称': message.nickname or '匿名同学',
                '留言内容': message.content,
                '提交时间': message.created_at.isoformat(),
            }
            for message in TreeHoleMessage.objects.filter(is_visible=True)
        ]
        return api_response({'results': messages})

    try:
        payload = json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError:
        return api_response({'error': '请求体必须是 JSON 格式'}, status=400)

    nickname = str(payload.get('昵称') or payload.get('nickname') or '').strip()
    content = str(payload.get('留言内容') or payload.get('content') or '').strip()

    if not content:
        return api_response({'error': '留言内容不能为空'}, status=400)
    if len(content) > 300:
        return api_response({'error': '留言内容不能超过 300 个字'}, status=400)

    message = TreeHoleMessage.objects.create(
        nickname=nickname[:50],
        content=content,
        is_visible=True,
    )

    return api_response(
        {
            'id': message.id,
            '昵称': message.nickname or '匿名同学',
            '留言内容': message.content,
            '提交时间': message.created_at.isoformat(),
        },
        status=201,
    )
