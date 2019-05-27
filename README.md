# Aqarmap-blog

Installation guide:

- git clone https://github.com/sherifelkhiat/Aqarmap-blog.git
- open terminal in the project directory
- run composer install
- create new database 
- setup your env file ( insert database credentials )

        APP_URL=http://your-url
        MIX_APP_URL="${APP_URL}"

        LOG_CHANNEL=stack

        DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=your-database-name
        DB_USERNAME=username
        DB_PASSWORD=password

- run "php artisan migrate"
- run "php artisan db:seed --class=UsersTableSeeder"
- run "php artisan key:generate"
- run "php artisan jwt:secret"
- run "npm install"
- run "npm run watch"

                   -------------------------------------------

back-end link : http://your-website/login

login credintials:
username: admin@admin.com
password: password

