# install mongo db
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list
apt-get update
apt-get install -y mongodb-org
# start local mongo server
service mongod start

# install meteor
curl https://install.meteor.com/ | sudo sh

# run app
cd /vagrant
#sudo chown -Rh vagrant .meteor/local
export MONGO_URL='mongodb://localhost'
MONGO_URL='mongodb://localhost' meteor --settings config/dev --allow-superuser
