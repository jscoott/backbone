module.exports = ->
  @loadNpmTasks "grunt-contrib-copy"

  # Copy node_modules to the distribution folder during a build to ensure that
  # third-party resources are available.
  @config "copy",
    release:
      files: [
        src: "node_modules/**", dest: "dist/"
      ]
