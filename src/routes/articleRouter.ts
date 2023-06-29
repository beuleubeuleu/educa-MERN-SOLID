import { Router }                                                                                                                                            from "express";
import { createArticle, deleteArticle, getAllArticleByAuthor, getAllArticleByCategorie, getAllArticles, getAllPublicArticles, getOneArticle, updateArticle } from "../controller/articleController"
import upload                                                                                                                                                from "../middlewares/imgUpload";
import { estProfesseur }                                                                    from "../middlewares/auth/estProfesseur";
import { estConnecté }                                                                      from "../middlewares/auth/estConnecté";
import { estAdmin }                                                                         from "../middlewares/auth/estAdmin";

const articleRouter = Router();

articleRouter.post("/",estProfesseur, upload.single("image"), createArticle);
articleRouter.get("/", estAdmin, getAllArticles);
articleRouter.get("/public", estConnecté, getAllPublicArticles);
articleRouter.get("/:idArticle", estConnecté, getOneArticle);
articleRouter.get("/categorie/:idCategorie", estConnecté, getAllArticleByCategorie);
articleRouter.get("/auteur/:idAuteur", estConnecté, getAllArticleByAuthor);
articleRouter.delete("/delete/:idArticle", deleteArticle);
articleRouter.delete("/update/:idArticle", updateArticle);

export default articleRouter;