#!/bin/bash
rm -rf /etc/apache2/sites-enabled/000-default.conf
cp /var/www/html/000-default.conf /etc/apache2/sites-enabled/000-default.conf 

sudo a2enmod rewrite
sudo service apache2 restart

sudo apt update
sudo apt install php-cli unzip



curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php

HASH=`curl -sS https://composer.github.io/installer.sig`

php -r "if (hash_file('SHA384', '/tmp/composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"

sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer   

cd /var/www/html/

composer require twig/twig
composer dump-autoload