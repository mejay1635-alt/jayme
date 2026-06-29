# Render Deployment

## 1. Push the latest code to GitHub

Make sure these files are in your repository:

- `requirements.txt`
- `render.yaml`
- `Procfile`
- `web_jayme/settings.py`

## 2. Create a Render web service

1. Sign in to [Render](https://render.com/).
2. Click `New +` -> `Web Service`.
3. Connect your GitHub repository `mejay1635-alt/jayme`.
4. Choose the branch you want to deploy.

## 3. Use these settings

- Runtime: `Python 3`
- Build Command:
  `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`
- Start Command:
  `gunicorn web_jayme.wsgi:application`

## 4. Add environment variables

Create these variables in Render:

- `SECRET_KEY`
  Use a long random string.
- `DEBUG`
  Set to `False`
- `ALLOWED_HOSTS`
  Set to your Render hostname, for example `web-jayme.onrender.com`
- `CSRF_TRUSTED_ORIGINS`
  Set to `https://web-jayme.onrender.com`
- `DATABASE_URL`
  If you create a Render PostgreSQL database, copy its internal connection string here.

## 5. Database recommendation

This project can still start with SQLite locally, but production should use PostgreSQL.

In Render:

1. Create a `PostgreSQL` database.
2. Copy the database's connection string.
3. Paste it into the web service as `DATABASE_URL`.
4. Redeploy the service.

## 6. Open the site

After deployment finishes, Render will give you a public URL like:

`https://web-jayme.onrender.com`

## 7. Admin login

If you want to use `/admin/`, create an admin account locally first:

```bash
python manage.py createsuperuser
```

Then push again or recreate the same user on the deployed database after `DATABASE_URL` is configured.
