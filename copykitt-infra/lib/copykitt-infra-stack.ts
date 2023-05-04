import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dotenv from 'dotenv';
import { ApiGateway } from 'aws-cdk-lib/aws-events-targets';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

dotenv.config();

export class CopykittInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this, "BaseLayer", {
      code: lambda.Code.fromAsset("lambda_base_layer/layer.zip"),	
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_9],
    });

    const apiLambda = new lambda.Function(this, "ApiFunction", {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromAsset("../app/"),
      handler: "api.handler",
      layers: [layer],
      environment: {
        "OPENAI_API_KEY": process.env.OPENAI_API_KEY ?? "",
      },
    });

    const copykittAPI = new apigateway.RestApi(this, "RestAPI", {
      restApiName: "CopyKitt Tutorial API",
    });
 
    copykittAPI.root.addProxy({
      defaultIntegration: new apigateway.LambdaIntegration(apiLambda),
    });
  }
}

// https://knde0xjtj4.execute-api.eu-central-1.amazonaws.com/prod/generate_copykitt_output?prompt=%22boxing%20club%22