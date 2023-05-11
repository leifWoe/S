docker rm layer-container

docker build -t base-layer .

docker run --name layer-container base-layer

docker cp layer-container:layer.zip . && echo "layer.zip created with updated base layer"

# chmod +x ./generate_base_layer.sh

# add dependencies to requirments file && run -> 

# sudo service --status-all 
# sudo service docker start -d
# sudo ./generate_base_layer.sh   