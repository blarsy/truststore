test:
	mockgen -source=./x/truststore/keeper/msg_server_create_attestation.go -destination ./mocks/keeper/keeper.go -package=mocks

	go test ./...

webclasses:

	./web/node_modules/protobufjs/bin/pbjs -t static-module -w es6 /Users/bertrandlarsy/code/go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.46.0/proto/cosmos/base/query/v1beta1/pagination.proto ./proto/truststore/attestation.proto ./proto/truststore/identifier_type.proto ./proto/truststore/query.proto ./proto/truststore/tx.proto ./proto/truststore/params.proto ./proto/truststore/global.proto -o ./web/lib/truststore.js
	./web/node_modules/protobufjs/bin/pbts ./web/lib/truststore.js -o ./web/lib/truststore.d.ts

dev:

	ignite chain serve -f