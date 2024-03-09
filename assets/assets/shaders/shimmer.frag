{
  "sksl": {
    "entrypoint": "shimmer_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 uSize;\nuniform float uSeed;\nuniform vec4 uLineColor;\nuniform vec4 uBackgroundColor;\nuniform float uStripeWidth;\n\nvec4 fragColor;\n\nvoid FLT_main()\n{\n    vec2 direction = vec2(0.865999996662139892578125, 0.5);\n    vec2 normalizedCoords = flutter_FragCoord.xy / uSize;\n    float waveRaw = 0.5 * (1.0 + sin(uSeed - ((dot(normalizedCoords, direction) * uStripeWidth) * 3.141499996185302734375)));\n    float wave = smoothstep(0.0, 1.0, waveRaw);\n    vec4 color = mix(uBackgroundColor, uLineColor, vec4(wave));\n    fragColor = color;\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 0,
        "name": "uSize",
        "rows": 2,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 1,
        "name": "uSeed",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 2,
        "name": "uLineColor",
        "rows": 4,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 3,
        "name": "uBackgroundColor",
        "rows": 4,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 4,
        "name": "uStripeWidth",
        "rows": 1,
        "type": 10
      }
    ]
  }
}