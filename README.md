# EBS-Server

## Getting started

### Installing
#### Manual

```bash
# Clone the project and run composer
cd ebs-server

# Migration and DB seeder (after changing your DB settings in .env)
php artisan migrate --seed

# Install dependency with NPM
npm install

# develop
npm run dev # or npm run watch

# Build on production
npm run production
```

#### Docker
```sh
docker-compose up -d
```
Build static files within Laravel container with npm
```sh
# Get laravel docker container ID from containers list
docker ps

docker exec -it <container ID> npm run dev # or npm run watch
# Where <container ID> is the "laravel" container name, ex: src_laravel_1
```
Open http://localhost:8000 (laravel container port declared in `docker-compose.yml`) to access ebs-server

## Built with
* [Laravel](https://laravel.com/) - The PHP Framework For Web Artisans
* [Laravel Sanctum](https://github.com/laravel/sanctum/) - Laravel Sanctum provides a featherweight authentication system for SPAs and simple APIs.
* [spatie/laravel-permission](https://github.com/spatie/laravel-permission) - Associate users with permissions and roles.
* [VueJS](https://vuejs.org/) - The Progressive JavaScript Framework
* [Element](https://element.eleme.io/) - A  Vue 2.0 based component library for developers, designers and product managers
* [Vue Admin Template](https://github.com/PanJiaChen/vue-admin-template) - A minimal vue admin template with Element UI

See also the list of [contributors](https://github.com/tuandm/laravue/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Acknowledgements
* [Laravue](https://github.com/tuandm/laravue) A beautiful dashboard combination of Laravel, Vue.js and the UI Toolkit Element.
* [vue-element-admin](https://panjiachen.github.io/vue-element-admin/#/) A magical vue admin which insprited Laravue project.
* [tui.editor](https://github.com/nhnent/tui.editor) - Markdown WYSIWYG Editor.
* [Echarts](http://echarts.apache.org/) - A powerful, interactive charting and visualization library for browser.
