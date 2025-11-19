import React, { useEffect } from 'react';

const SupportPage: React.FC = () => {
    useEffect(() => {
        // Load eDesk widget script
        const script = document.createElement('script');
        script.innerHTML = `
      (window._xsq||function(x,s){
        window._xsq=[];
        var c,b,a=document.createElement("iframe");
        a.src="javascript:false";
        a.title="";
        a.role="presentation";
        (a.frameElement||a).style.cssText="display: none";
        document.body.appendChild(a);
        try{b=a.contentWindow.document}catch(f){
          c=document.domain,
          a.src="javascript:var d=document.open();d.domain='"+c+"';void(0);",
          b=a.contentWindow.document
        }
        b.open()._l=function(){
          var a=this.createElement("script");
          c&&(this.domain=c);
          a.id="js-iframe-async";
          a.src="https://"+x+s;
          this.body.appendChild(a)
        };
        b.write('<body onload="document._l();">');
        b.close();
        return _xsq
      })("widgets.xsellco.com","/js/widgets.js").push(["load","aw0j44102",document.scripts[document.scripts.length-1]]);
    `;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Support Client
                    </h1>
                    <p className="text-lg text-slate-600">
                        Notre équipe est là pour vous aider. Utilisez le widget ci-dessous pour nous contacter.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="prose prose-slate max-w-none">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                            Comment pouvons-nous vous aider ?
                        </h2>
                        <p className="text-slate-600 mb-6">
                            Le widget de support eDesk apparaîtra automatiquement sur cette page.
                            Vous pouvez l'utiliser pour :
                        </p>
                        <ul className="text-slate-600 space-y-2 mb-8">
                            <li>Poser des questions sur nos produits</li>
                            <li>Obtenir de l'aide technique</li>
                            <li>Suivre vos demandes de support</li>
                            <li>Contacter notre équipe en temps réel</li>
                        </ul>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                            <p className="text-sm text-blue-800">
                                <strong>Note :</strong> Le widget eDesk se chargera automatiquement.
                                Si vous ne le voyez pas, assurez-vous que JavaScript est activé dans votre navigateur.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        Vous pouvez également nous contacter par email à{' '}
                        <a href="mailto:support@omni-distribution.fr" className="text-blue-600 hover:text-blue-700 underline">
                            support@omni-distribution.fr
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
