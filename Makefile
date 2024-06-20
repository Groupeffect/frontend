REPO_PATH=~/apps/groupeffect/github/frontend
APP_NAME=webinterface
APP_PATH=$(REPO_PATH)/$(APP_NAME)
APP_PORT=3000
APP_HOST=localhost
up:
	cd $(APP_PATH) && yarn dev --host $(APP_HOST) --port $(APP_PORT)

build:
	cd $(APP_PATH) && yarn build --emptyOutDir

push:
	make build
	cd $(REPO_PATH)
	git add .
	git commit -m "update and build locally"
	git push	

	