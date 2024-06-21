REPO_PATH=~/apps/groupeffect/github/frontend
APP_NAME=webinterface
APP_PATH=$(REPO_PATH)/$(APP_NAME)
APP_PORT=3000
APP_HOST=localhost
UPDATE_TIME=$(shell date)
up:
	cd $(APP_PATH) && yarn dev --host $(APP_HOST) --port $(APP_PORT)

build:
	cd $(APP_PATH) && yarn build --emptyOutDir

	cp $(APP_PATH)/src/assets/apple-touch-icon.png $(REPO_PATH)/docs/assets/apple-touch-icon.png
	cp $(APP_PATH)/src/assets/android-chrome-512x512.png $(REPO_PATH)/docs/assets/android-chrome-512x512.png
	cp $(APP_PATH)/src/assets/android-chrome-192x192.png $(REPO_PATH)/docs/assets/android-chrome-192x192.png

push:
	make build
	cd $(REPO_PATH)
	git add .
	git commit -m "update and build at $(UPDATE_TIME)"
	git push	

install:
	cd $(APP_PATH) && yarn install
