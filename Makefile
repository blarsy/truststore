test:
	mockgen -source=./x/truststore/keeper/msg_server_create_attestation.go -destination ./mocks/keeper/keeper.go -package=mocks

	go test ./...
