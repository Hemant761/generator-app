'use strict';

var generators=require("yeoman-generator");
var _=require("lodash");
var chalk=require("chalk");
var yosay=require("yosay");
const helper = require('./validation');

module.exports=generators.Base.extend({  
  
    constructor:function(){
        generators.Base.apply(this,arguments);
    },

    initializing:function(){
    
    },
    prompting:function(){

        this.log(yosay("Welcome to " + chalk.yellow("Angular module") + " generator!"));

        var done=this.async();
        
        this.prompt([{
            type:'input',
            name:'ngAppName',
            message:'Enter Angular app name (ng-app)',
            default:'myApp',
            validate: helper.validateName,
            store:true
        },
        {
            type:'input',
            name:'ngModuleName',
            message:'Enter module name',
            default:'module',
            validate: helper.validateName,
            store:true

        }],function(answer){
            this.ngAppName=answer.ngAppName;            
            this.ngModuleName=answer.ngModuleName;
            done();
        }.bind(this));

    },
    configuring:function(){
    
    },
    writing:{        
       appStaticFiles:function(){        
       },
       scripts:function(){

            this.fs.copyTpl(
                this.templatePath('app.module.js'),
                this.destinationPath('src/app/app.module.js'),
                {
                    ngAppName:this.ngAppName,
                    ngModuleName:this.ngModuleName
                }
            ),
             this.fs.copyTpl(
                this.templatePath('modules/list.controller.js'),
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/'+ this.ngModuleName +'list.controller.js'),
                {
                    ngAppName:this.ngAppName,
                    ngModuleName:this.ngModuleName
                }
            ),
             this.fs.copyTpl(
                this.templatePath('modules/new.controller.js'),
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/new'+ this.ngModuleName +'.controller.js'),
                {
                    ngAppName:this.ngAppName,
                    ngModuleName:this.ngModuleName
                }
            ), this.fs.copyTpl(
                this.templatePath('modules/edit.controller.js'),
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/edit'+ this.ngModuleName +'.controller.js'),
                {
                    ngAppName:this.ngAppName,
                    ngModuleName:this.ngModuleName
                }
            ), this.fs.copyTpl(
                this.templatePath('modules/service.js'),
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/'+ this.ngModuleName +'.service.js'),
                {
                    ngAppName:this.ngAppName,
                    ngModuleName:this.ngModuleName
                }
            )            
       },
       htmls:function(){

            this.fs.copyTpl(
                this.templatePath('modules/list.view.html'),
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/'+ this.ngModuleName +'list.view.html')

            ),
             this.fs.copyTpl(
                this.templatePath('modules/new.view.html'),                
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/new'+ this.ngModuleName +'.view.html')

            ), this.fs.copyTpl(
                this.templatePath('modules/edit.view.html'),
                this.destinationPath('src/app/modules/'+ this.ngModuleName + '/edit'+ this.ngModuleName +'.view.html')
            )
       }
    },
    conflicts:function(){
    
    },
    install:function(){
    
    },
    end:function(){
    
    }
});
